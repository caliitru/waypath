import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, Percent, Calendar } from 'lucide-react';

type CalculatorType = 'loan' | 'savings' | 'debt';

function FinancialCalculator() {
 const [calculatorType, setCalculatorType] = useState<CalculatorType>('loan');
 const [amount, setAmount] = useState('');
 const [rate, setRate] = useState('');
 const [term, setTerm] = useState('');
 const [result, setResult] = useState<number | null>(null);

 const calculate = (e: React.FormEvent) => {
   e.preventDefault();
   const principal = parseFloat(amount);
   const interestRate = parseFloat(rate) / 100;
   const termMonths = parseFloat(term);

   let calculatedResult = 0;

   switch (calculatorType) {
     case 'loan':
       // Monthly loan payment calculation (PMT)
       const monthlyRate = interestRate / 12;
       calculatedResult = (principal * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / 
                         (Math.pow(1 + monthlyRate, termMonths) - 1);
       break;
     case 'savings':
       // Future value calculation
       calculatedResult = principal * Math.pow(1 + interestRate, termMonths / 12);
       break;
     case 'debt':
       // Debt payoff calculation
       calculatedResult = principal * (1 + (interestRate * termMonths / 12));
       break;
   }

   setResult(calculatedResult);
 };

 return (
   <div className="p-6">
     <div className="flex items-center gap-3 mb-6">
       <div className="p-2 rounded-lg bg-[#78C5B6] bg-opacity-10">
         <Calculator className="w-6 h-6 text-[#78C5B6]" />
       </div>
       <div>
         <h2 className="text-lg font-semibold text-gray-900">Financial Calculator</h2>
         <p className="text-sm text-gray-500">Calculate loans, savings, and debt payoff</p>
       </div>
     </div>

     <div className="grid md:grid-cols-2 gap-8">
       <div>
         <form onSubmit={calculate} className="space-y-6">
           <div className="space-y-4">
             <div className="flex gap-4">
               {(['loan', 'savings', 'debt'] as const).map((type) => (
                 <button
                   key={type}
                   type="button"
                   onClick={() => setCalculatorType(type)}
                   className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                     calculatorType === type
                       ? 'bg-[#78C5B6] text-white'
                       : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                   }`}
                 >
                   {type.charAt(0).toUpperCase() + type.slice(1)}
                 </button>
               ))}
             </div>

             <div>
               <label className="block text-sm font-medium text-gray-700 mb-1">
                 Amount
               </label>
               <div className="relative">
                 <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                 <input
                   type="number"
                   value={amount}
                   onChange={(e) => setAmount(e.target.value)}
                   className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#78C5B6]"
                   placeholder="Enter amount"
                   required
                 />
               </div>
             </div>

             <div>
               <label className="block text-sm font-medium text-gray-700 mb-1">
                 Interest Rate (%)
               </label>
               <div className="relative">
                 <Percent className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                 <input
                   type="number"
                   value={rate}
                   onChange={(e) => setRate(e.target.value)}
                   className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#78C5B6]"
                   placeholder="Enter rate"
                   required
                   step="0.1"
                 />
               </div>
             </div>

             <div>
               <label className="block text-sm font-medium text-gray-700 mb-1">
                 Term (months)
               </label>
               <div className="relative">
                 <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                 <input
                   type="number"
                   value={term}
                   onChange={(e) => setTerm(e.target.value)}
                   className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#78C5B6]"
                   placeholder="Enter term"
                   required
                 />
               </div>
             </div>
           </div>

           <button
             type="submit"
             className="w-full bg-[#78C5B6] text-white py-2 rounded-lg hover:bg-[#5BA697] transition-colors"
           >
             Calculate
           </button>
         </form>
       </div>

       <div>
         {result !== null && (
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="bg-gray-50 p-6 rounded-lg"
           >
             <h3 className="text-lg font-semibold text-gray-900 mb-4">Results</h3>
             
             <div className="space-y-4">
               <div>
                 <p className="text-sm text-gray-500">
                   {calculatorType === 'loan' ? 'Monthly Payment' :
                    calculatorType === 'savings' ? 'Future Value' :
                    'Total Payoff Amount'}
                 </p>
                 <p className="text-3xl font-bold text-[#003366]">
                   ${result.toFixed(2)}
                 </p>
               </div>

               <div className="pt-4 border-t border-gray-200">
                 <h4 className="text-sm font-medium text-gray-700 mb-2">Summary</h4>
                 <ul className="space-y-2 text-sm text-gray-600">
                   <li>Principal Amount: ${amount}</li>
                   <li>Interest Rate: {rate}%</li>
                   <li>Term: {term} months</li>
                   {calculatorType === 'loan' && (
                     <li>Total Cost: ${(result * parseInt(term)).toFixed(2)}</li>
                   )}
                 </ul>
               </div>
             </div>
           </motion.div>
         )}
       </div>
     </div>
   </div>
 );
}

export default FinancialCalculator;
