const postsUrl = 'https://jsonplaceholder.typicode.com/posts';

const commentsUrl = 'https://jsonplaceholder.typicode.com/comments';

const todosUrl = 'https://jsonplaceholder.typicode.com/todos';

const usersUrl = 'https://jsonplaceholder.typicode.com/users';

const getJSON = (url) => {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        // return null;
        throw new TypeError(`Response not OK`);
      }

      let type = response.headers.get('content-type');

      if (!type.includes('application/json')) {
        throw new TypeError(`Expected JSON, got ${type}`);
      }

      return response.json();
    })
    .then((data) => {
      if (data) {
        parseData(data);
      } else {
        logError();
      }
    })
    .catch((e) => {
      if (e instanceof TypeError) {
        displayErrorMessage('Something is wrong with our server');
      } else {
        displayErrorMessage(e.message);
      }
    });
};

const urls = [postsUrl, commentsUrl, todosUrl, usersUrl];

const fetchSequettially = (urls) => {
  const bodies = [];

  const fetchUrl = (url) => {
    return fetch(url)
      .then((response) => response.json())
      .then((body) => bodies.push(body));
  };

  let promise = Promise.resolve(undefined);

  for (let url of urls) {
    promise = promise.then(() => fetchUrl(url));
  }

  return promise.then(() => bodies);
};

// fetchSequettially(urls)
//   .then((body) => console.log(body))
//   .catch((e) => console.log(e));

// const fetchUrl = (url) => {
//   return fetch(url)
//     .then((response) => response.json())
//     .then((body) => body);
// };

// const promises = urls.map((url) => fetchUrl(url));

// Promise.all(promises)
//   .then((body) => console.log(body))
//   .catch((e) => console.log(e));

const wait = (duration) => {
  return new Promise((resolve, reject) => {
    if (duration < 0) {
      reject(new Error('Time not implemented'));
    }

    setTimeout(resolve, duration);
  });
};

wait(5000)
  .then((response) => console.log('time is out'))
  .catch((e) => console.log(e));
