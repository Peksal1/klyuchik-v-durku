import { Button, Card, Spinner } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
// import AddEventPopover from "../admin/AddEventPopover/index.tsx";
import "./index.css";

type User = {
  name: string;
  wow_nickname: string;
  role: string;
};

const MyProfilePage = () => {
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await axios.get<User>(
            "https://klyuchik-v-durku-backend.herokuapp.com/user",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setUser(response.data);
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchUser();
  }, []);

  const handleAddEventClick = () => {
    // TODO: Implement logic for adding an event
  };

  const handleModalToggle = () => {
    setIsModalVisible((prev) => !prev);
  };

  return (
    <Card className="my-profile-card" border="primary">
      <Card.Header as="h5">Моя учетная запись</Card.Header>
      <Card.Body>
        {isLoading ? (
          <Spinner animation="border" />
        ) : (
          <>
            <p>Имя: {user?.name}</p>
            <p>Ник в вов: {user?.wow_nickname}</p>
            {user?.role === "admin" && (
              <>
                {/* Placeholder buttons for admin-only actions */}
                <Button variant="primary" className="admin-button">
                  Button 2
                </Button>
                <Button variant="primary" className="admin-button">
                  Button 3
                </Button>
                <Button variant="primary" className="admin-button">
                  Button 4
                </Button>
                <Button
                  variant="primary"
                  onClick={handleModalToggle}
                  className="admin-button"
                >
                  Create new guide category
                </Button>
                {/* <AddEventPopover onAddEvent={handleAddEventClick} /> */}
                {/* <NewGuideCategoryModal
                  visible={isModalVisible}
                  onCancel={handleModalToggle}
                /> */}
              </>
            )}
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default MyProfilePage;
