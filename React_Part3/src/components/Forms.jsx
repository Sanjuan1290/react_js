

export default function(){

    function handleSubmit(event){
        event.preventDefault()

        const form_elem = event.currentTarget
        const formData = new FormData(form_elem) 

        const email = formData.get('email')
        const password = formData.get('password')
        const employmentStatus = formData.get('emplymentStatus')

        console.log(email);
        console.log(password);
        console.log(employmentStatus);

        
        form_elem.reset()
    }
    return(
        <div className="Form_container">
            <section>
                <h1>Signup Form</h1>

                <form method="GET" onSubmit={handleSubmit} className="Form_section">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" defaultValue="joe@schmoe.com" placeholder="joe@schmoe.com"/>

                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" defaultValue="12345" />

                    <button>Submit</button>

                    <fieldset>
                        <legend>Employment Status</legend>

                        <label>
                            <input type="radio" name="emplymentStatus" defaultChecked={true} value='Unemployed'/>
                            Unemployed
                        </label>

                        <label>
                            <input type="radio" name="emplymentStatus" value='Unemployed'/>
                            Part-Time
                        </label>

                        <label>
                            <input type="radio" name="emplymentStatus" value='Unemployed'/>
                            Full-time
                        </label>
                    </fieldset>
                </form>
            </section>
        </div>
    )
}