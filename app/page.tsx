'use client'

import { useState } from 'react'
import Question from '@/components/Question'
import Results from '@/components/Results'

const questions = [
  {
    question: 'ECサイトにおいてセキュリティ対策を怠った場合に発生し得る主な損害はどれですか？',
    options: [
      'サイト運営費の削減',
      '売上高の大幅な減少と信用失墜',
      '顧客からの返品率増加',
      'サーバーの容量不足'
    ],
    correctAnswer: 1,
    explanation: 'セキュリティ事故は経済的損失や信用低下を引き起こします。',
    page: 'p.1-2',
  },
  {
    question: '2021年の国内クレジットカードの年間不正利用被害総額はおおよそいくらですか？',
    options: [
      '142億円',
      '240億円',
      '330億円',
      '500億円'
    ],
    correctAnswer: 2,
    explanation: 'クレジットカード不正利用被害の主な原因は番号盗用によるものです。',
    page: 'p.9',
  },
  {
    question: 'ECサイトがサイバー攻撃の標的になる主な理由として正しいものはどれですか？',
    options: [
      'サイト運営者が少ないため',
      'セキュリティ対策が不十分なサイトが多いため',
      '利用者が減少しているため',
      'サーバーのコストが高いため'
    ],
    correctAnswer: 1,
    explanation: '攻撃者はセキュリティの弱いサイトを標的とします。',
    page: 'P.9-10',
  },
  {
    question: 'IPA調査によると、セキュリティ対策が不十分な自社構築サイトの割合は何%ですか？',
    options: [
      '28%',
      '42%',
      '52%',
      '67%'
    ],
    correctAnswer: 2,
    explanation: '脆弱性診断により危険度「高」が多数確認されています。',
    page: 'p.12',
  },
  {
    question: 'ECサイトの構築時において、「必須」とされるセキュリティ対策に含まれないものはどれですか？',
    options: [
      '管理画面のアクセス制限',
      'TLSの利用',
      '二要素認証の導入',
      '脆弱性診断'
    ],
    correctAnswer: 2,
    explanation: '二要素認証は「必要」とされます。',
    page: 'p.26',
  },
  {
    question: '被害を受けたECサイト運営事業者の約何%がSaaS型サービスまたはモール型サービスに移行しましたか？',
    options: [
      '14%',
      '35%',
      '52%',
      '66%'
    ],
    correctAnswer: 2,
    explanation: '被害後、多くの事業者が別形態へ移行しています。',
    page: 'p.17',
  },
  {
    question: 'セキュリティ対策が不十分な場合に取るべき「応急処置」として正しいものはどれですか？',
    options: [
      'サーバーの増設',
      'WAFの導入やサイバー保険への加入',
      '広告費の削減',
      '顧客への割引サービス実施'
    ],
    correctAnswer: 1,
    explanation: '応急処置としてリスク軽減策を講じます。',
    page: 'p.22',
  },
  {
    question: '「外部委託先にセキュリティ運用を依頼する場合」に求められる重要な事項は何ですか？',
    options: [
      '契約書にセキュリティ要件を明記すること',
      '外部委託先の裁量に任せること',
      'サービス提供範囲を広げること',
      '予算を削減すること'
    ],
    correctAnswer: 0,
    explanation: '契約時に要件を明示することが重要です。',
    page: 'p.22',
  },
  {
    question: 'ECサイトのセキュリティ対策における「トータルコスト」に含まれないものはどれですか？',
    options: [
      'サイト構築費用',
      '運用・保守コスト',
      'サイバー攻撃の被害額',
      'セキュリティアップデート費用'
    ],
    correctAnswer: 2,
    explanation: 'トータルコストは予防的費用を指します。',
    page: 'p.21',
  },
  {
    question: '「管理者画面へのログイン認証」が原因となるセキュリティ問題として正しいものはどれですか？',
    options: [
      'デフォルト設定のまま使用すること',
      '管理者の人数が多いこと',
      'パスワードを複雑化すること',
      'IPアドレスのホワイトリストを設定すること'
    ],
    correctAnswer: 0,
    explanation: '設定不備や脆弱性は攻撃の対象となります。',
    page: 'p.18',
  }
]

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userAnswers, setUserAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (answerIndex: number) => {
    setUserAnswers([...userAnswers, answerIndex])
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  if (showResults) {
    return <Results questions={questions} userAnswers={userAnswers} />
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-6 text-center">理解度チェックテスト</h1>
        <Question
          questionData={questions[currentQuestion]}
          questionNumber={currentQuestion + 1}
          onAnswer={handleAnswer}
        />
      </div>
    </div>
  )
}

