import React, { useState } from "react";
import { Badge, Card, Form } from "react-bootstrap";
import "./Guides.css";
import CustomPagination from "../CustomPagination";
import { guides } from "../helpers/data";

const pageSize = 6;

type Tag = string;

const GuidesPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedTag, setSelectedTag] = useState<Tag | "">("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleTagSelect = (value: string) => {
    setSelectedTag(value);
  };

  const filteredGuides = guides.filter(
    (guide) =>
      guide.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedTag === "" || guide.tag === selectedTag)
  );

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const guidesToShow = filteredGuides.slice(startIndex, endIndex);

  const cardStyle = {
    width: "500px", // Adjust the width as per your requirement
    height: "600px",
    margin: "20px",
    display: "inline-block",
    verticalAlign: "top",
  };
  const uniqueTags = Array.from(new Set(guides.map((guide) => guide.tag)));

  return (
    <>
      <div className="title-search-container">
        <h1 className="header-style">ПОЛЕЗНЫЕ АДДОНЫ</h1>
        <div className="search-container">
          <Form.Control
            type="text"
            placeholder="Search Guides"
            style={{ width: 200, marginRight: "10px" }}
            value={searchTerm}
            onChange={handleSearch}
          />
          <Form.Select
            aria-label="Select tag"
            style={{ width: 150 }}
            value={selectedTag}
            onChange={(e) => handleTagSelect(e.currentTarget.value)}
          >
            <option value="">All Tags</option>
            {uniqueTags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </Form.Select>
        </div>
      </div>
      {guidesToShow.map((guide) => (
        <Card key={guide.id} style={cardStyle}>
          <div
            style={{
              height: "400px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={guide.image}
              alt={guide.name}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
          </div>
          <div className="guide-title-style">{guide.name}</div>

          <div className="guide-description-style">{guide.description}</div>
          <a href={guide.link}>Ссылка</a>
          <Badge className="guide-badge-style">{guide.tag}</Badge>
        </Card>
      ))}
      <CustomPagination
        page={currentPage}
        pageSize={pageSize}
        totalItems={filteredGuides.length}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default GuidesPage;
