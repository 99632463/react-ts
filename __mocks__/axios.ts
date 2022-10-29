
// const mapping: IMapping = {
//   post: {},
//   get: {}
// };

// interface IMapping {
//   post: IKeyValueMap;
//   get: IKeyValueMap;
// }

// const fetch = (type: 'get' | 'post') => (url: string) => {
//   console.log(`axios mock ${type} ${url}`);
//   const data = mapping[type][url];
//   if (data && data.then) {
//     return data;
//   }
//   return new Promise(resolve => {
//     resolve({ data });
//   });
// };

// export const main = {
//   fetchGet: fetch('get'),
//   fetchPost: fetch('post')
// };

// const axiosObj = {
//   create: function () {
//     return {
//       get: (url: string) => main.fetchGet(url),
//       post: (url: string) => main.fetchPost(url),
//       defaults: {
//         baseURL: '',
//         headers: {}
//       },
//       interceptors: {
//         response: {
//           use: () => { }
//         },
//         request: {
//           use: () => { }
//         }
//       }
//     };
//   },
// };

// export const setPostUrlData = (url: string, data: any) => mapping.post[url] = data;

// export const setGetUrlData = (url: string, data: any) => mapping.get[url] = data;

// export default axiosObj;