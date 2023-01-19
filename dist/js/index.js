const baseurl = "https://ar-speciale.azurewebsites.net/api/"

Vue.createApp({

    data() {
        return {
            users: [],
            parametersToGetBy: "",
            addData: { firstName: "", lastName: "", email:"", country:""},
            addMessage: "",
        }
    },

    methods:
    {
        async addUser() {
            try {
                response = await axios.post(baseurl + "User", this.addData)
                this.addMessage = "response " + response.status + " " + response.statusText
            } catch (ex) {
                alert(ex.message)
            }
        },
    }
    
}).mount("#app")