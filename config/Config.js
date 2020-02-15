
module.exports = {
  // TODO: Tambahkan konfigurasi untuk
  // DB sebagai host mongoDB instance yang melihat pada environment variable `HOST`,
  //    jika environment variables tidak tersedia, makan nilai DB menjadi `localhost`
  // DB:

  // APP_PORT sebagai PORT untuk menjalankan project express dengan environment variable `HOST`
  //          jika environment variable tidak tersedia, maka nilai APP_PORT menjadi 80
  // APP_PORT:

  // DB: process.env.HOST ? process.env.HOST : 'mongodb://ramadhanagindo:blu3Isp4ss@sandbox-workshop-shard-00-00-f92cd.mongodb.net:27017,sandbox-workshop-shard-00-01-f92cd.mongodb.net:27017,sandbox-workshop-shard-00-02-f92cd.mongodb.net:27017/learnit-react?authSource=admin&replicaSet=sandbox-workshop-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true',
  // APP_PORT: process.env.APP_PORT ? process.env.APP_PORT : 80
  DB: process.env.HOST ? process.env.HOST : 'localhost',
  APP_PORT: process.env.PORT ? process.env.PORT : 80
};
