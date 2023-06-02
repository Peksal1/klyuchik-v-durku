import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Button, Dropdown, Form } from "react-bootstrap";
import { BoxArrowRight, PersonCircle, PersonFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "./index.css";

const LoginPopover = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [user, setUser] = useState<{
    name: string;
    wow_nickname: string;
  } | null>(null);

  const handleLogout = useCallback(async () => {
    const token = localStorage.getItem("token");

    try {
      await axios.post(
        "https://klyuchik-v-durku-backend.herokuapp.com/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.removeItem("token");
      setUser(null); // set user state to null
    } catch (error) {
      console.log(error);
    }
  }, []);

  const onFinish = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const target = event.target as HTMLFormElement;
      const email = target.email.value;
      const password = target.password.value;

      try {
        const response = await axios.post(
          "https://klyuchik-v-durku-backend.herokuapp.com/login",
          { email, password }
        );
        const token = response.data.token;

        // Store token in localStorage
        localStorage.setItem("token", token);

        // Close the popover
        setVisible(false);

        // Fetch user info and update the state
        const userResponse = await axios.get(
          "https://klyuchik-v-durku-backend.herokuapp.com/user",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const user = userResponse.data.user;
        setUser(user);
      } catch (error) {
        console.log(error);
      }
    },
    []
  );

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await fetch(
            "https://klyuchik-v-durku-backend.herokuapp.com/user",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const userData = await response.json();
          setUser(userData);
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchUser();
  }, [onFinish]);

  const handleVisibleChange = (visible: boolean) => {
    setVisible(visible);
  };

  const content = (
    <Form onSubmit={onFinish}>
      <Form.Group controlId="email">
        <Form.Label>Эл. Почта</Form.Label>
        <Form.Control
          type="email"
          placeholder="Введите адрес своей почты!"
          required
        />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Пароль</Form.Label>
        <Form.Control
          type="password"
          placeholder="Введите свой пароль!"
          required
        />
      </Form.Group>

      <div className="d-flex justify-content-between align-items-center">
        <Button variant="link">Забыли пароль?</Button>
        <div>
          <Link to="/register">
            <Button variant="primary" type="submit" className="mr-2">
              Войти
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="secondary">Регистрация</Button>
          </Link>
        </div>
      </div>
    </Form>
  );

  const authMenu = (
    <Dropdown.Menu>
      <Dropdown.Item>
        <Link to="/profile">
          <PersonCircle size={16} className="mr-2" />
          Мой профиль
        </Link>
      </Dropdown.Item>
      <Dropdown.Item onClick={handleLogout}>
        <BoxArrowRight size={16} className="mr-2" />
        Выйти
      </Dropdown.Item>
    </Dropdown.Menu>
  );

  return (
    <>
      {!user ? (
        <>
          <Dropdown show={visible} onToggle={(isOpen) => setVisible(isOpen)}>
            <Dropdown.Toggle variant="secondary" id="dropdown-login">
              <PersonFill size={16} className="mr-2" />
              Вход
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>{content}</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </>
      ) : (
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-profile">
            <PersonCircle size={16} className="mr-2" />
            {user.wow_nickname + ` (${user.name})`}
          </Dropdown.Toggle>
          {authMenu}
        </Dropdown>
      )}
    </>
  );
};

export default LoginPopover;
