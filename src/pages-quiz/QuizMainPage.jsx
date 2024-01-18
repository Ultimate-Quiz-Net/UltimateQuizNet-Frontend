import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../axios/api';
import { HoverCard } from '../shared/styled';
import { Btn11 } from '../shared/styled';
import { getAuthHeaders } from '../shared/authHeaders';


// 텍스트 일정이상 넘어가면 ..으로 보이게 잘라줌
function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + "...";
}

function QuizMainPage() {
  const headers = getAuthHeaders();
  const navigate = useNavigate();
  const [quizzes, setQuizzes] = useState([]);

  const handleQuizCreateClick = () => {
    // 토큰이 없을 경우 알림 표시
    if (!headers.Authorization) {
      alert("로그인이 필요합니다.");
      navigate("sign-in");
    } else {
      // 토큰이 있는 경우 게시글 등록 페이지로 이동
      navigate("/quizzes");
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/quizzes', headers);
        setQuizzes(response.data.data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          alert('토큰이 만료되었습니다.');
          navigate("/sign-in");
        } else {
          console.error('에러 발생:', error);
        }
      }
    };

    fetchData();
  }, []);// 빈 배열을 두어 컴포넌트가 처음 마운트될 때만 실행되도록 함

  return (
    <div data-bs-theme="dark">
      <div className="text-center mt-3" style={{ marginBottom: "30px" }}>
          <Btn11 className="btn btn-primary" onClick={handleQuizCreateClick}>게시글 등록</Btn11>
      </div>
      <div className="row row-cols-1 row-cols-md-4 g-4 mx-auto w-75 pb-5">
        {quizzes.length > 0 &&
          quizzes.map((quiz) => (
            <div key={quiz.quizId} className="col">
              <HoverCard>
                <div className="card h-100">
                  {/* Link 태그를 특정 요소에 적용 */}
                  <Link to={`/quizzes/${quiz.quizId}`}>
                    <img
                      src={quiz.imageURL}
                      className="card-img-top"
                      alt="Card image cap"
                      style={{ backgroundColor: "white" }}
                    />
                  </Link>
                  <div className="card-body">
                    <h6 className="card-title">{quiz.title}</h6>
                    <p className="card-text">{truncateText(quiz.content, 15)}</p>
                  </div>
                </div>
              </HoverCard>
            </div>
          ))}
      </div>
    </div>
  );
}

export default QuizMainPage;
