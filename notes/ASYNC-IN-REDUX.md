# SUMMARY NOTES ABOUT IDEAS OF USING ASYNC IN REDUX 

## Introduction
Here is the plan:

- **Why a mock API?**
- **Async libraries**
- **Implement Thunks**

### Why a Mock API?
![Why a mock API](./images/why-a-mock-api.png "Why a mock API?")

### Redux Async Libraries
- **redux-thunk**: Return functions from action creators.
- **redux-promise**: Flux standard actions and promises.
- **redux-saga**: Uses ES6 generators and rich domain-specific language.

![Comparision thunks and sagas](./images/comparision-thunks-n-sagas.png "Comparision thunks and sagas")

#### Thunks Overview
```javascript
export function deleteAuthor(authorId) {
    return dispatch => {
        return AuthorApi.deleteAuthor(authorId).then(() => {
            dispatch(deleteAuthor(authorId));
        }).catch(handleError);
    };
}
```
