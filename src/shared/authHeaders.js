import Cookies from "js-cookie";

// 헤더를 생성하는 함수
export const getAuthHeaders = () => ({
<<<<<<< HEAD
  headers: {
    accessToken: `Bearer ${Cookies.get("accessToken")}`,
  },
});
=======
    headers: {
        "Authorization": `Bearer ${Cookies.get('accessToken')}`,
    },
});
>>>>>>> 4c824651d77e3d32401fdb01ff0a5725d19e46f9
