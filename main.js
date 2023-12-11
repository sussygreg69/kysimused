import inquirer from 'inquirer';

inquirer
  .prompt([
    {
        type: 'input',
        name: 'input',
        message: 'kirjuta enda lemmik kell'
    },
    {
      type: 'rawlist',
      name: 'rawlist',
      message: 'kas kell on 6:',
      choices: ['jah', 'ei', 'kell on 3', 'kell ei ole 5'],
    },
    {
      type: 'number',
      name: 'number',
      message: 'sisesta enda lemmik kell:',
    },
    {
        type: 'list',
        name: 'list',
        message: 'mis kell on?',
        choices: ['1', '2', '3', '4', '5', '6', '7'],
      },
      {
        type: 'checkbox',
        name: 'checkbox',
        message: 'mis su kell on:',
        choices: ['13', '6', '9', '15:00'],
      },
      {
        type: 'expand',
        name: 'expand',
        message: 'vali oma lemmik kell:',
        choices: [
          {
            key: 'a',
            name: 'kell 1',
            value: 'a',
          },
          {
            key: 'b',
            name: 'kell 2',
            value: 'b',
          },
          {
            key: 'c',
            name: 'kell 3',
            value: 'c',
          },
        ],
      },
      {
        type: 'confirm',
        name: 'confirm',
        message: 'kas sulle meeldivad kellad?',
      },
      {
        type: 'password',
        name: 'password',
        message: 'sisesta enda pangakaardi numbrid, aegumisaeg ja kolm lõbusat numbrit kaardi taga:',
      },
  ])
  .then((answers) => {
    console.log(`su lemmik kell on: ${answers.input}`);
    console.log(`kell on ${answers.list}.`);
    console.log(`You prefer ${answers.rawlist}.`);
    console.log(`su lemmik kell on: ${answers.number}`);
    console.log(`You selected: ${answers.checkbox.join(', ')}`);
    console.log(`You selected option ${answers.expand}.`);
    if (answers.confirm) {
        console.log('sulle meeldivad kellad');
      } else {
        console.log('sulle ei meeldi kellad');
      }
 
    console.log('yayy thanks');
  });