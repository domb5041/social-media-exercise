import axios from 'axios';

// posts

export const getPosts = () => {
    const config = { params: { per_page: 1000 } };
    return axios
        .get('/api/posts', config)
        .then(res => res.data)
        .catch(err => console.log(err));
};

export const createPost = (body, userId) => {
    const payload = { post: { body: body, user_id: userId } };
    return axios
        .post('/api/posts', payload)
        .then(res => res.data)
        .catch(err => console.log(err));
};

// export const updatePost = (id, body) => {
//     const payload = { post: { body: body } };
//     return axios
//         .patch('/api/posts/' + id, payload)
//         .then(res => res.data)
//         .catch(err => console.log(err));
// };

export const publishPost = (id, body) => {
    const payload = { post: { state: 'published', body: body } };
    return axios
        .patch('/api/posts/' + id, payload)
        .then(res => res.data)
        .catch(err => console.log(err));
};

// users

export const getUsers = () => {
    return axios
        .get('/api/users')
        .then(res => res.data)
        .catch(err => console.log(err));
};

export const createUser = (firstname, lastname) => {
    const payload = {
        firstname: firstname,
        lastname: lastname,
    };
    return axios
        .post('/api/users', payload)
        .then(res => res.data)
        .catch(err => console.log(err));
};

export const deleteUser = id => {
    return axios
        .delete('/api/users/' + id)
        .then(res => res.data)
        .catch(err => console.log(err));
};

// images

export const uploadPostImage = id => {
    var formData = new FormData();
    var imagefile = document.querySelector('#file');
    formData.append('image', imagefile.files[0]);
    const config = {
        headers: { 'content-type': 'multipart/form-data' },
    };
    return axios
        .post(`/api/posts/${id}/image`, formData, config)
        .then(res => res.data)
        .catch(err => console.log(err));
};
