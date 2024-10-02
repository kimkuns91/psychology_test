'use client'

import * as XLSX from 'xlsx'

import { useEffect, useState } from 'react'

import { dateFormat } from '@/lib/dateFormat'
import { Test } from '@prisma/client'
import axios from 'axios'

export default function ResultPage() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<Test[]>([])

  // 엑셀 파일로 변환 및 다운로드 함수
  const handleDownloadExcel = () => {
    if (!data || data.length === 0) return

    // 엑셀 워크시트 생성
    const worksheet = XLSX.utils.json_to_sheet(data)
    // 엑셀 워크북 생성
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Test Data')

    // 엑셀 파일 다운로드
    XLSX.writeFile(workbook, 'test_data.xlsx')
  }

  const fetchData = async () => {
    setLoading(true)
    try {
      const res = await axios.get('/api/result')
      const data = res.data
      setData(data)
    } catch (error) {
      console.error('데이터 가져오기 오류:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (data.length === 0)
    return (
      <h1 className="text-center text-2xl font-bold text-white">데이터 없음</h1>
    )

  return (
    <div className="container w-full min-h-screen mx-auto py-12">
      {/* 엑셀 다운로드 버튼 */}
      <div className="mb-20 flex justify-end">
        <button
          onClick={handleDownloadExcel}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          엑셀 파일로 다운로드
        </button>
      </div>

      {data && data.length > 0 ? (
        <div className="flex flex-col gap-6">
          {data.map((item) => (
            <div key={item.id} className="bg-white shadow-lg rounded-lg p-6">
              <h1 className="text-xl font-bold text-gray-800 mb-2">
                {item.name || 'Untitled'}
              </h1>
              <p className="text-gray-500 mb-4">
                {/* Date 객체를 문자열로 변환 */}
                {dateFormat(item.createdAt)}
              </p>

              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800">A 그룹</h3>
                <ul className="list-disc list-inside">
                  {Object.entries(item)
                    .filter(([key]) => key.startsWith('A_'))
                    .map(([key, value]) => (
                      <li key={key} className="text-gray-600">
                        {key}:{' '}
                        {value instanceof Date
                          ? value.toLocaleDateString()
                          : value || 'N/A'}
                      </li>
                    ))}
                </ul>
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800">B 그룹</h3>
                <ul className="list-disc list-inside">
                  {Object.entries(item)
                    .filter(([key]) => key.startsWith('B_'))
                    .map(([key, value]) => (
                      <li key={key} className="text-gray-600">
                        {key}:{' '}
                        {value instanceof Date
                          ? value.toLocaleDateString()
                          : value || 'N/A'}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1 className="text-center text-2xl font-bold text-white">
          데이터 없음
        </h1>
      )}
    </div>
  )
}
