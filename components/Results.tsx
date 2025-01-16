import { Button } from "@/components/ui/button"

interface ResultsProps {
  questions: {
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
    page: string
  }[]
  userAnswers: number[]
}

export default function Results({ questions, userAnswers }: ResultsProps) {
  const score = userAnswers.reduce((acc, answer, index) => {
    return answer === questions[index].correctAnswer ? acc + 1 : acc
  }, 0)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-6 text-center">テスト結果</h1>
        <p className="text-xl mb-4 text-center">
          あなたのスコア: {score} / {questions.length}
        </p>
        <div className="space-y-4">
          {questions.map((q, index) => (
            <div key={index} className="border-b pb-4">
              <p className="font-semibold">問題 {index + 1}: {q.question}</p>
              <p className="text-green-600">正解: {q.options[q.correctAnswer]}</p>
              <p className={userAnswers[index] === q.correctAnswer ? "text-green-600" : "text-red-600"}>
                あなたの回答: {q.options[userAnswers[index]]}
              </p>
              <p className="text-gray-500 text-sm">解説: {q.explanation}</p>
              <p className="text-gray-500 text-sm">ページ: {q.page}</p>
            </div>
          ))}
        </div>
        <Button className="mt-6 w-full" onClick={() => window.location.reload()}>
          もう一度挑戦する
        </Button>
      </div>
    </div>
  )
}

