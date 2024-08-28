import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../elements/Loading";
import { Helmet } from "react-helmet";
import apiUrl from "../utils/GetApiUrl";

export default function DetailTemple() {
  const { id } = useParams();
  const [temple, setTemple] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [commentData, setCommentData] = useState({
    topic: "",
    body: "",
    userId: "",
  });
  useEffect(() => {
    const getTempleDetail = async () => {
      try {
        const { data } = await axios.get(`${apiUrl}/temples/${id}`);
        if (data?.success) {
          setTemple(data?.temple);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getTempleDetail();
  }, [id]);

  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:4000/comment/temple/${id}/comments?resourceType=temple`
        );
        console.log("API Response:", data);
        if (data?.success) {
          setComments(data?.comments);
          console.log("Comments:", data?.comments);
        } else {
          console.log("No Comments Found");
        }
      } catch (error) {
        console.log("API Error:", error);
      }
    };
    getComments();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommentData({
      ...commentData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = localStorage.getItem("Token");
      const response = await axios.post(
        `http://localhost:4000/comment/temple/${id}/comments?resourceType=temple`,
        {
          topic: commentData.topic,
          body: commentData.body,
          userId: userId,
        }
      );
      setComments([...comments, response.data]);
      setCommentData({ topic: "", body: "" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* Display existing comments */}
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment._id}>
            <h3>{comment.topic}</h3>
            <p>{comment.body}</p>
          </div>
        ))
      ) : (
        <p>No comments</p>
      )}
      {/* Form to add a new comment */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="topic"
          placeholder="Comment Topic"
          value={commentData.topic}
          onChange={handleChange}
        />
        <textarea
          name="body"
          placeholder="Your Comment"
          value={commentData.body}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Add Comment</button>
      </form>
      <Helmet>
        <title>{`${temple?.templeName || "Temple"}`}</title>
        <meta
          name="description"
          content={`Explore the details and significance of ${
            temple?.templeName || "this temple"
          }. Learn about its history, architecture, and cultural importance in Jainism.`}
        />
        <meta
          name="keywords"
          content={`Jain temple, Jainism, ${
            temple?.templeName || "temple"
          }, architecture, history, significance`}
        />
      </Helmet>

      {loading ? (
        <Loading />
      ) : (
        <>
          <div id="temple-details">
            <h1 className="center-title">{temple.templeName}</h1>

            <p className="desc">{temple.introduction}</p>
            <p>
              <span className="first-word"> Location: </span>{" "}
              {temple.location.city}, {temple.location.district},{" "}
              {temple.location.state}, {temple.location.country}
            </p>
            <p>
              <span className="first-word"> Geographic Coordinates: </span>
              {temple.location.geographic_coordinates}
            </p>
            <p>
              <span className="first-word">Latitude:</span>{" "}
              {temple.location.latitude}
            </p>
            <p>
              <span className="first-word">Longitude:</span>{" "}
              {temple.location.longitude}
            </p>
            <p>
              <span className="first-word">Elevation:</span>{" "}
              {temple.location.elevation}
            </p>
            <h2>Basic Details:</h2>
            <p>
              <span className="first-word">Height:</span>{" "}
              {temple.basic_details.height}
            </p>
            <p>
              <span className="first-word">Area:</span>{" "}
              {temple.basic_details.area}
            </p>
            <p>
              <span className="first-word">Visitors Per Year:</span>{" "}
              {temple.basic_details.visitors_per_year}
            </p>
            <p>
              <span className="first-word">God:</span>{" "}
              {temple.basic_details.god}
            </p>
            <p>
              <span className="first-word">Opening Year:</span>{" "}
              {temple.basic_details.opening_year}
            </p>
            <p>
              <span className="first-word">Website:</span>{" "}
              {temple.basic_details.website}
            </p>
            <p>
              <span className="first-word">Creator:</span>{" "}
              {temple.basic_details.creator}
            </p>
            <h2>Additional Details:</h2>
            <p>Record: {temple.additional_details.record}</p>
            <p>Importance: {temple.additional_details.importance}</p>
            <h2>Architecture:</h2>
            <p>Style: {temple.architecture.style}</p>
            <p>Construction Year: {temple.architecture.construction_year}</p>
            <p>Features: {temple.architecture.features.join(", ")}</p>
            <h2>Special Features:</h2>
            <p>{temple.special_features.join(", ")}</p>
            <h2>Inner Temples:</h2>
            {temple.innerTemples.map((innerTemple, index) => (
              <div key={index} className="innerTemple">
                <h3>{innerTemple.title}</h3>
                <p>{innerTemple.description}</p>
              </div>
            ))}
            <h2>Articles:</h2>
            {temple.articles.map((article, index) => (
              <div key={index} className="article">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </div>
            ))}
            <h2>Presiding Deity:</h2>
            <p>Deity: {temple.presiding_deity.deity}</p>
            <p>Color: {temple.presiding_deity.color}</p>
            <p>Posture: {temple.presiding_deity.posture}</p>
            <p>Height: {temple.presiding_deity.height}</p>
            <p>Location: {temple.presiding_deity.location}</p>
            <h2>Approach Route:</h2>
            <p>{temple.approach_route.description}</p>
            <h2>Managed By:</h2>
            {temple.managed_by.map((managedBy, index) => (
              <div key={index} className="managedBy">
                <p>Name: {managedBy.name}</p>
                <p>Address: {managedBy.address}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
