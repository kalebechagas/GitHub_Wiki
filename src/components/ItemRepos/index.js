import React from "react";
import { ItemContainer } from "./styles";

function ItemRepos({ repos, handleRemoveRepos }) {
    const handleRemove = () => {
        handleRemoveRepos(repos.id);
    };
    return (
        <ItemContainer onClick={handleRemove}>
            <h3>{repos.name}</h3>
            <p>{repos.full_name}</p>
            <a href={repos.html_url} rel="noreferrer" target="_blank">
                Ver repositório
            </a>
            <br />
            <a
                href={handleRemoveRepos}
                rel="noreferrer"
                target="_blank"
                className="remover"
            >
                Remover
            </a>
            <hr />
        </ItemContainer>
    );
}

export default ItemRepos;
