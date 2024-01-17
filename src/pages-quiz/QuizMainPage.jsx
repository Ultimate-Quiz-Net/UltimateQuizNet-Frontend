import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../axios/api';

function QuizMainPage() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/quizzes");
        console.log(response.data.data);
        setQuizzes(response.data.data);
      } catch (error) {
        console.error("에러 발생:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div data-bs-theme="dark">
      <div className="text-center mt-3" style={{ marginBottom: "30px" }}>
        <Link to="/quizzes">
          <button className="btn btn-primary">게시글 등록</button>
        </Link>
      </div>
      <div className="row row-cols-1 row-cols-md-4 g-4 mx-auto w-75 pb-5">
        {quizzes.length > 0 &&
          quizzes.map((quiz) => (
            <div key={quiz.quizId} className="col">
              <div className="card h-100">
                {/* Link 태그를 특정 요소에 적용 */}
                <Link to={`/quizzes/${quiz.quizId}`}>
                  <img src={quiz.imageURL} className="card-img-top" alt="Card image cap" />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{quiz.title}</h5>
                  <p className="card-text">{quiz.content}</p>
                  <p className="card-text">작성자:</p>
                </div>

              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default QuizMainPage;
