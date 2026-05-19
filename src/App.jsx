import { HashRouter, Routes, Route } from "react-router-dom";
import KakaoGuard from "./components/KakaoGuard";
import MainHome from "./pages/MainHome";
import MbtiHome from "./pages/Home";
import MbtiQuiz from "./pages/Quiz";
import MbtiResult from "./pages/Result";
import MbtiTypeDetail from "./pages/TypeDetail";
import EgentetoHome from "./pages/egenteto/Home";
import EgentetoQuiz from "./pages/egenteto/Quiz";
import EgentetoResult from "./pages/egenteto/Result";
import TciHome from "./pages/tci/Home";
import TciQuiz from "./pages/tci/Quiz";
import TciResult from "./pages/tci/Result";
import AttachmentHome from "./pages/attachment/Home";
import AttachmentQuiz from "./pages/attachment/Quiz";
import AttachmentResult from "./pages/attachment/Result";
import "./App.css";

function App() {
  return (
    <KakaoGuard>
    <HashRouter>
      <div className="app">
        <Routes>
          {/* Main */}
          <Route path="/" element={<MainHome />} />

          {/* MBTI */}
          <Route path="/mbti" element={<MbtiHome />} />
          <Route path="/mbti/quiz" element={<MbtiQuiz />} />
          <Route path="/mbti/result/:type" element={<MbtiResult />} />
          <Route path="/mbti/type/:type" element={<MbtiTypeDetail />} />

          {/* 에겐테토 */}
          <Route path="/egenteto" element={<EgentetoHome />} />
          <Route path="/egenteto/quiz" element={<EgentetoQuiz />} />
          <Route path="/egenteto/result/:type" element={<EgentetoResult />} />

          {/* TCI */}
          <Route path="/tci" element={<TciHome />} />
          <Route path="/tci/quiz" element={<TciQuiz />} />
          <Route path="/tci/result/:type" element={<TciResult />} />

          {/* 성인애착유형 */}
          <Route path="/attachment" element={<AttachmentHome />} />
          <Route path="/attachment/quiz" element={<AttachmentQuiz />} />
          <Route path="/attachment/result/:type" element={<AttachmentResult />} />
        </Routes>
      </div>
    </HashRouter>
    </KakaoGuard>
  );
}

export default App;
