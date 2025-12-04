export default function XinQingJiPage() {
    return (
      <div className="bg-yellow-50 min-h-screen text-gray-800">
        {/* 这是一个完全独有的布局 */}
        <header className="py-20 text-center font-serif">
          <h1 className="text-5xl text-orange-500">心晴记 ☀️</h1>
          <p className="mt-4 text-xl">记录每一份心情的温度</p>
        </header>
        
        <main className="container mx-auto px-4 grid grid-cols-2 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-xl">
             <h2 className="text-2xl mb-4">设计理念</h2>
             <p>采用 CBT 疗法...</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-xl">
             {/* 甚至可以放一个独有的交互组件 */}
             <div className="mood-tracker-demo">交互演示区</div>
          </div>
        </main>
      </div>
    )
  }