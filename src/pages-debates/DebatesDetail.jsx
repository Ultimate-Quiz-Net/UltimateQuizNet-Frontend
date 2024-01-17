import React, { useEffect } from "react";
import { api } from "../axios/api";
import * as St from "../components/style";
import { useParams } from "react-router";

function DebatesDetail() {
  const { debateId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(`/debates/${debateId}`);
      console.log("response 확인", response);
    };
    fetchData();
  }, [debateId]);

  return <div>DebatesDetail</div>;
}

export default DebatesDetail;
