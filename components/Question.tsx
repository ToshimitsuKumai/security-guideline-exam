import { Button } from "@/components/ui/button"

interface QuestionProps {
  questionData: {
    question: string
    options: string[]
  }
  questionNumber: number
  onAnswer: (answerIndex: number) => void
}

export default function Question({ questionData, questionNumber, onAnswer }: QuestionProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">問題{questionNumber}</h2>
      <p className="mb-4">{questionData.question}</p>
      <div className="space-y-2">
        {questionData.options.map((option, index) => (
          <Button
            key={index}
            className="w-full text-left justify-start"
            onClick={() => onAnswer(index)}
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  )
}

