import React from 'react'
import Star from './Star'

const John = () => {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })


    function toggleFavorite() {
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }))
    }
    return (
        <main>
            <article className="card">
                <img
                    src={""}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <Star isFilled={contact} click={toggleFavorite} />
                    <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}

export default John