/**
 * Axios HttpHelper created by uncletang on 2017-12-29
 */
import axios from 'axios';
import qs from 'qs';
import store from '../store';
import myActions from '../store/type';

axios.interceptors.request.use(function (config) {//请求拦截
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

axios.interceptors.response.use(function (response) {//响应拦截
    return response;
  }, function (error) {
    return Promise.reject(error);
});

const defaultOpts = {
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'content-type': 'application/json',
    },
    timeout: 500 * 1000,
    withCredentials: true,
  };

export default class HttpHelper{
    
    static axiosGet(url,params = {}){
        const tempparams = {
            method: 'get',
            url: url,
            params: params,
        }
        const opts = Object.assign({},defaultOpts,tempparams);
        return this.axiosRequest(opts);
    }

    static axiosPost(url,data = {}){
        const tempparams = {
            method: 'post',
            url: url,
            data: qs.stringify(data),
        }
        const opts = Object.assign({},defaultOpts,tempparams);
        return this.axiosRequest(opts);
    }

    static axiosRequest(opts){

        return new Promise((resolve,reject) => {

            axios(opts).then(function (response) {
                
                if(response.data.code == 124317){
                    parent.window.Portal.pageNotFound()
                    return resolve('pageNotFound');
                }else if(response.data.code == 124001){
                    store.commit(myActions.SHOW_DIALOG,{ tips:'登录超时，请重新扫码登录' , key:'timeouterror'});
                    return resolve('登录超时，请重新扫码登录');
                }else if(response.data.code == 124002){
                    store.commit(myActions.SHOW_DIALOG,{  tips:'此账号已在其它地方登录，请重新扫码登录' , key:'timeouterror'});
                    return resolve('此账号已在其它地方登录，请重新扫码登录');
                }else{
                    return resolve(response.data);
                }
            })
            .catch(function (error) {

                store.commit(myActions.FADE_TOAST,{  tipstext:'网络异常，请稍后重试' , type:'danger'});

                if (error.response) {//发出了请求并且服务响应了状态码
                    // console.log(error.response.data);
                    // console.log(error.response.status);
                    // console.log(error.response.headers);
                    return reject(`发出了请求并且服务响应了状态码 : ${error.response.status}`);
                } else if (error.request) {//发出了请求但是没有接收到响应
                    console.log(error.request);
                    return reject(`发出了请求但是没有接收到响应 : ${error.request}`);
                } else {//在发送请求的时候出现了一些错误
                    console.log('Error', error.message);
                    return reject(`其他异常：${error.message}`);
                }
            });
        })
    }
}
