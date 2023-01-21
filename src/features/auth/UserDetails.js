import { useEffect, useState } from "react";
import { Col, Card, Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getUserDataAsync } from "./authSlice";
import { useSelector } from "react-redux";

const UserDetails = () => {
  const data = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDataAsync());
  }, []);

  return (
    <div>
      <h1>hjhf</h1>
  
    </div>
  );
};

export default UserDetails;
