const Profile = () => {
    return (
        <div className="profile">
            <img className="profile__avatar"
                 src="https://st3.depositphotos.com/2788703/16692/i/600/depositphotos_166923204-stock-photo-digital-illustration-of-a-lion.jpg"
                 alt="avatar"/>
            <div className="profile__info">
                <h3 className="profile__title">
                    Anton Fedorov
                </h3>
                <ul className="profile__list list-reset">
                    <li className="profile__item">
                        Date of Birth:
                        <span className="profile__text">
                            12.05.1986
                        </span>
                    </li>
                    <li className="profile__item">
                        Сity:
                        <span className="profile__text">
                            Pskov
                        </span>
                    </li>
                    <li className="profile__item">
                        Education:
                        <span className="profile__text">
                            PSU'2025
                        </span>
                    </li>
                    <li className="profile__item">
                        Web site:
                        <a className="profile__link" href="#">
                            <span className="profile__text">
                                https://it-incubator.ru/
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Profile;