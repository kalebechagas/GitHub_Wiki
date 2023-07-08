import { useState } from "react";
import gitLogo from "../assets/background.png";
import Input from "../components/Input";
import Button from "../components/Button";
import ItemRepos from "../components/ItemRepos";
import { api } from "../services/api";

import { Container } from "./styles";

function App() {
    const [repos, setRepos] = useState([]);

    const [currentRepos, setCurrentRepos] = useState("");
    const handleSearchRepos = async () => {
        const { data } = await api.get(`repos/${currentRepos}`);

        if (data.id) {
            const isExist = repos.find((repos) => repos.id === data.id);

            if (!isExist) {
                setRepos((prev) => [...prev, data]);
                setCurrentRepos("");
                return;
            }
        }
        alert("Repositório não encontrado");
    };

    const handleRemoveRepos = (id) => {
        const newRepos = repos.filter((repos) => repos.id !== id);
        setRepos(newRepos);
    };

    return (
        <Container>
            <img src={gitLogo} width={72} height={72} alt="logo"></img>
            <Input
                value={currentRepos}
                onChange={(e) => setCurrentRepos(e.target.value)}
            />
            <Button onClick={handleSearchRepos} />
            {repos.map((repos) => (
                <ItemRepos
                    handleRemoveRepos={handleRemoveRepos}
                    repos={repos}
                />
            ))}
        </Container>
    );
}

export default App;
