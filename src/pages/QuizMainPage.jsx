import React, { useEffect, useState } from 'react';
// import { todos } from '../shared/data';
import { Link } from 'react-router-dom';
import { api } from '../axios/api';
function QuizMainPage() {
  const [todos, setTodos] = useState([]);
  // 전체 리스트 가져오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get("/quizzes");
        console.log(data);

        // 여기서 data를 가공하여 필요한 형태로 매핑
        const formattedData = data.map(item => ({
          id: item.id,
          category: item.category,
          title: item.title,
          detail: item.detail,
          answerKey: item.answerKey,
          comments: item.comments
        }));
        setTodos(formattedData);
      } catch (error) {
        console.error("에러 발생:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div data-bs-theme="dark">
      <div className="text-center mt-3" style={{ marginBottom: "30px", }}>
        {/* 게시글 등록 페이지로 이동 */}
        <Link to="/quizzes">
          <button className="btn btn-primary">게시글 등록</button>
        </Link>
      </div>
      <div className="row row-cols-1 row-cols-md-4 g-4 mx-auto w-75 pb-5" >
        {todos
          .filter(todo => todo.category == '퀴즈')
          .map(todo => (
            <div key={todo.id} className="col">
              <div className="card h-100">
                <Link key={todo.id} className="card-img-top" to={`/quizzes/${todo.id}`}>
                  <img src="data:image/png;base64,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" className="card-img-top" alt="Card image cap" />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{todo.title}</h5>
                  <p className="card-text">{todo.detail}</p>
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
