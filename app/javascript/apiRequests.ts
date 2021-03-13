import axios from 'axios';

// posts

export const getPosts = postsLength => {
    const config = { params: { per_page: postsLength } };
    return axios
        .get('/api/posts', config)
        .then(res => res.data)
        .catch(err => console.log(err));
};

export const getPost = id => {
    return axios
        .get('/api/posts/' + id)
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

export const deletePost = id => {
    return axios.delete('/api/posts/' + id).catch(err => console.log(err));
};

export const editPost = (id, body) => {
    const payload = { post: { body: body } };
    return axios
        .patch('/api/posts/' + id, payload)
        .then(res => res.data)
        .catch(err => console.log(err));
};

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

export const getUser = id => {
    return axios
        .get('/api/users/' + id)
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

// comments

export const createComment = (postId, userId, comment) => {
    const payload = { comment: { body: comment, user_id: userId } };
    return axios
        .post(`/api/posts/${postId}/comments`, payload)
        .then(res => res.data)
        .catch(err => console.log(err));
};

export const getComments = postId => {
    return axios
        .get(`/api/posts/${postId}/comments`)
        .then(res => res.data)
        .catch(err => console.log(err));
};

export const deleteComment = (postId, commentId) => {
    return axios
        .delete(`/api/posts/${postId}/comments/${commentId}`)
        .then(res => res.data)
        .catch(err => console.log(err));
};

export const editComment = (postId, commentId, body) => {
    const payload = { comment: { body: body } };
    return axios
        .patch(`/api/posts/${postId}/comments/${commentId}`, payload)
        .then(res => res.data)
        .catch(err => console.log(err));
};
