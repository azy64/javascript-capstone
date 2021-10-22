export default class AppId {
    static loadId = async () => {
      await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',
        {
          method: 'POST',
          header: 'Content-type: application/json; charset=utf-8',
        })
        .then((res) => res.text())
        .then((data) => {
          localStorage.setItem('appId', data);
          // console.log('appId:', data);
        });
    }

    static saveLikes = (data) => {
      localStorage.setItem('likes', JSON.stringify(data));
    }

    static getLikes = () => {
      if (localStorage.getItem('likes')) { return JSON.parse(localStorage.getItem('likes')); }
      return [];
    }
}