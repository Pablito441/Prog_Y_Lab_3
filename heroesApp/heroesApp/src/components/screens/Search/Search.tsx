import { useEffect, useState } from "react";
import { IHeroes } from "../../../types/Heroes";
import { heroesData } from "../../../data/heroes";
import { useForm } from "../../../hooks/useForm";
import { Form, InputGroup } from "react-bootstrap";
import { CardHeroes } from "../../ui/CardHeroes/CardHeroes";
import styles from "./Search.module.css"

export const Search = () => {

    const { values, handleChange } = useForm({
        search: "",
    })
    const { search } = values;

    const [heros, SetHeros] = useState<IHeroes[]>([]);
    useEffect(() => {
        const result = heroesData.filter((h) => h.superhero.toLowerCase().trim().includes(search))
        SetHeros(result);
    }, [search])


    return (
        <div className={styles.containerSearch}>
            <div>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Ingrese Heroe</InputGroup.Text>
                    <Form.Control onChange={handleChange} type="text" name="search" />
                </InputGroup>
            </div>
            <div className={styles.containerListHeroes}>
                {heros.length > 0 ? (
                    <>
                        {heros.map((hero) => (
                            <div key={hero.id} style={{ width: "80%"}} >
                                <CardHeroes hero={hero} />
                            </div>
                        ))}
                    </>
                ) : (
                    <div>
                        <h2>No coincide la busqueda</h2>
                    </div>
                )}
            </div>
        </div>
    );


};
