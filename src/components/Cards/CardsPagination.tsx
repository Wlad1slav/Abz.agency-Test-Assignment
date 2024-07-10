'use client'

import {useEffect, useState} from "react";
import axios from "axios";
import Card from "@/components/Cards/Card";
import Preloader from "@/components/General/Preloader/Preloader";
import Button from "@/components/Form/Button/Button";
import Heading from "@/components/General/Typography/Heading/Heading";
import Font from "@/components/General/Typography/Font/Font";
import {UserModel} from "@/types/props";
import './Cards.scss';

function CardsPagination() {
    const [cardsComponents, setCardsComponents] = useState<Array<JSX.Element>>([]);
    const [request, setRequest] = useState<string>("https://frontend-test-assignment-api.abz.agency/api/v1/users?count=6");
    const [loading, setLoading] = useState(false);

    const [lastPage, setLastPage] = useState<number>();
    const [currentPage, setCurrentPage] = useState<number>(1);

    const getUsers = async () => {
        setLoading(true);
        await axios.get(request)
            .then(r => {
                if (!lastPage) {
                    // If the number of pages is not specified, it is stored
                    setLastPage(r.data.total_pages);
                }

                setCurrentPage(r.data.page); // Storing the current page the user is on
                setRequest(r.data.links.next_url); // Storing the link for the next request

                // Conversion of the received data into the JSX
                const components = r.data.users.map((user: UserModel) => <Card key={user.id} {...user} />);
                setCardsComponents(prevComponents => [...prevComponents, ...components]);
                setLoading(false);
            })
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="users-cards">
            <Font weight="normal">
                <Heading option="h1">Working with GET request</Heading>
            </Font>

            <div className="cards">
                {cardsComponents}
            </div>

            <div className="pagination">
                {loading ? <Preloader/> : <Button type="button" disabled={currentPage === lastPage} onClick={getUsers}>Show more</Button>}
            </div>
        </div>
    );
}

export default CardsPagination;
