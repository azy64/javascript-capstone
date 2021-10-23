export default class Comment {
    static information =[];

    static getGeneralInformation = async (id) => {
      await fetch(` https://api.tvmaze.com/shows/${id}`)
        .then((res) => res.json())
        .then((data) => {
          this.information = data;
        });
      return this.information;
    };
}
