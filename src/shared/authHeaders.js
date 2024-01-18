import Cookies from "js-cookie";

// 헤더를 생성하는 함수
export const getAuthHeaders = () => ({
    headers: {
        "Authorization": `Bearer ${Cookies.get('accessToken')}`,
    },
});

