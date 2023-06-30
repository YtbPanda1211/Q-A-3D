// Đây là cấu trúc để thêm câu hỏi
// let questionForm  = [{Câu hỏi 1}, {Câu hỏi 2}, {Câu hỏi 3}, {Câu hỏi 4},......]
// Cấu trúc câu hỏi như bên dưới nhé. Bạn làm theo như vậy là được nhé.
let questionForm = [
    {
        content: "Nội dung câu hỏi 1",
        a: "Đáp án A",
        b: "Đáp án B",
        c: "Đáp án C",
        d: "Đáp án D",
        t: "Đáp án A",
        des: "Giải thích cho câu 1"
    },
    {
        content: "Nội dung câu hỏi 2",
        a: "Đáp án A",
        b: "Đáp án B",
        c: "Đáp án C",
        d: "Đáp án D",
        t: "Đáp án C",
        des: "Giải thích cho câu 2"
    },
    {
        content: "Nội dung câu hỏi 3",
        a: "Đáp án A",
        b: "Đáp án B",
        c: "Đáp án C",
        d: "Đáp án D",
        t: "Đáp án C",
        des: "Giải thích cho câu 3"
    }
]

// KÍCH CỠ CHỮ CỦA NỘI DUNG CÂU HỎI
let questionSize = 24;

// KÍCH CỠ CHỮ CỦA CÂU TRẢ LỜI
let answerSize = 24;

// KÍCH CỠ CHỮ CỦA PHẦN GIẢI THÍCH
let descriptionSize = 32;

// KIỂU CHỮ CỦA CÂU TRẢ LỜI, NỘI DUNG CÂU HỎI, PHẦN GIẢI THÍCH
// LƯU Ý: KIỂU CHỮ NÀY ÁP DỤNG CHO CẢ 3
let fontAll = "monospace";

// THỜI GIAN TRẢ LỜI CÂU HỎI, THỜI GIAN TÍNH BẰNG "GIÂY"
//LƯU Ý: CÁC CÂU HỎI ĐỀU CÓ THỜI GIAN GIỐNG NHAU
let setTime = 5;