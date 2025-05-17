

export default function(){

    function handleSubmit(event){
        event.preventDefault()

        const form_elem = event.currentTarget
        const formData = new FormData(form_elem) 

        const email = formData.get('email')
        const password = formData.get('password')

        console.log(formData);
        console.log(email);
        console.log(password);

        
        form_elem.reset()
    }
    return(
        <div className="Form_container">
            <section>
                <h1>Signup Form</h1>

                <form method="GET" onSubmit={handleSubmit} className="Form_section">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" placeholder="joe@schmoe.com"/>

                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" />

                    <button>Submit</button>
                </form>
            </section>
        </div>
    )
}