<template lang="">
        <div class="container mt-3 mb-3">
            <h1>Manage Users</h1>
            <h3>
                Add new user
            </h3>
            <a href="/admin/createUser" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i> Create new
                user</a>

            <div class="container mt-3 mb-3">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr v-for="user in this.users">
                                    <td>
                                       {{user.id}}
                                    </td>
                                    <td>
                                     {{user.firstname}} {{user.lastname}}
                                    </td>
                                    <td>
                                        <div class="row">
                                            <div class="col">
                                                <a @click="editUser(user.id)"
                                                    class="btn btn-primary btn-sm"><i class="fa fa-edit"></i> Edit</a>
                                            </div>
                                            <div class="col">
                                                <a @click="deleteUser(user.id)"
                                                    class="btn btn-danger btn-sm"><i class="fa fa-trash"></i> Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                        </tbody>
                    </table>
        </div>
    </div>
</template>
<script>
import axios from '../../axios-auth.js';
export default {
    data() {
        return {
            id: '',
            firstname: '',
            lastname: '',
            users: []
        }
    }, methods: {
        fetchUsers() {
            axios.get('/users')
                .then(response => {
                    this.users = response.data;
                    console.log( response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        editUser(userId) {
            this.$router.push('/admin/editUser/' + userId);
        },
        deleteUser(userId) {
            axios.delete('/users/' + userId)
                .then(response => {
                    alert("User deleted successfully!");
                    this.fetchUsers();
                })
                .catch(error => {
                    console.log(error);
                });
        },
    },
    mounted() {
        this.fetchUsers();
    }
}
</script>
<style lang="">
    
</style>