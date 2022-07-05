'use strict';

const axios = require("axios");

function triggerWebHook() {
  const body = {
    'event_type': 'publish_blog'
  }
  axios.post(process.env.WEBHOOK_URL,body, {
    headers: {
      'Authorization': 'token ' + process.env.WEBHOOK_TOK,
      'Accept': 'application/vnd.github.everest-preview+json'
    },
  }).then((response) => {
    console.log("resp" + response)
  }).catch((err) => {
        console.log(err)
  });
}

module.exports = {
  afterCreate() {
    console.log('afterCreate');
    triggerWebHook();
  },
  //After publish
  afterUpdate() {
    console.log('afterUpdate');
    triggerWebHook();
  },
  afterDelete() {
    console.log('afterDelete');
    triggerWebHook();
  },
  afterCreateMany() {
    console.log('afterCreateMany');
    triggerWebHook();
  },
  //After publish
  afterUpdateMany() {
    console.log('afterUpdateMany');
    triggerWebHook();
  },
  afterDeleteMany() {
    console.log('afterDeleteMany');
    triggerWebHook();
  }
};
