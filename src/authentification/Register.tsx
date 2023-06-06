import React, { useEffect, useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { GuildMember } from "../best";
import "./Register.css";

interface FormValues {
  name: string;
  email: string;
  password: string;
  wow_nickname: string;
}

const RegistrationPage: React.FC = () => {
  const [members, setMembers] = useState<GuildMember[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchGuildMembers() {
      const response = await fetch(
        "https://klyuchik-v-durku-backend.herokuapp.com/guild-members"
      );
      const data = await response.json();
      setMembers(data as GuildMember[]);
    }

    fetchGuildMembers();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const target = event.target as typeof event.target & {
      name: { value: string };
      email: { value: string };
      password: { value: string };
      wow_nickname: { value: string };
    };

    const values: FormValues = {
      name: target.name.value,
      email: target.email.value,
      password: target.password.value,
      wow_nickname: target.wow_nickname.value,
    };

    try {
      const response = await fetch(
        "https://klyuchik-v-durku-backend.herokuapp.com/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            password: values.password,
            role: "user",
            wow_nickname: values.wow_nickname,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      // Handle success logic here
      navigate("/");
    } catch (error) {
      console.error(error);
      // Handle error logic here
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        {/* Rest of the form code */}
        <FormControl
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Найти персонажа..."
          size="lg"
        />

        <Form.Group controlId="wow_nickname">
          <Form.Label>Ник мейна</Form.Label>
          <Form.Control as="select" size="lg" required>
            {members
              .filter((member) =>
                member.character.name
                  .toLowerCase()
                  .includes(search.toLowerCase())
              )
              .sort((a, b) => a.character.name.localeCompare(b.character.name))
              .map((member) => (
                <option
                  value={member.character.name}
                  key={member.character.name}
                >
                  {member.character.name}
                </option>
              ))}
          </Form.Control>
        </Form.Group>

        <Button
          type="submit"
          className="btn btn-primary"
          disabled={loading}
          size="lg"
        >
          Зарегистрироваться
        </Button>
      </Form>
    </div>
  );
};

export default RegistrationPage;
