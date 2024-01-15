import styled from 'styled-components';

export const FormWrapper = styled.div`
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    form {
        display: flex;
        flex-direction: column;

        label {
            margin-bottom: 10px;
        }

        input,
        textarea {
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        button {
            background-color: #007bff;
            color: #fff;
            padding: 10px;
            cursor: pointer;
            border: none;
            border-radius: 4px;
            transition: background-color 0.3s;

            &:hover {
                background-color: #0056b3;
            }
        }
    }
`;
export const QuizDetailBoxStyle = styled.div`
    width: 50%;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    text-align: left; /* 이미지 및 내용 중앙 정렬 */

    img {
        width: 100%;
        height: auto;
        border-radius: 4px;
        margin-bottom: 10px;
        object-fit: cover;
    }

    h2 {
        font-size: 1.5rem;
        margin-bottom: 10px;
    }

    p {
        margin-bottom: 8px;
    }

    button {
        background-color: #007bff;
        color: #fff;
        padding: 10px;
        cursor: pointer;
        border: none;
        border-radius: 4px;
        transition: background-color 0.3s;

        &:hover {
            background-color: #0056b3;
        }
    }
`;
