'use client';

import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle,
} from '@/components/layout/toolbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, TrendingDown, Download, Printer } from 'lucide-react';
import { mockFinancialReports } from '@/lib/data/mock-data';
import { formatCurrency } from '@/lib/data/mock-data';

export default function LaporanKeuanganPage() {
  const totalPemasukan = mockFinancialReports.reduce((sum, r) => sum + r.pemasukan, 0);
  const totalPengeluaran = mockFinancialReports.reduce((sum, r) => sum + r.pengeluaran, 0);
  const totalSaldo = mockFinancialReports.reduce((sum, r) => sum + r.saldo, 0);

  return (
    <div className="container">
      <Toolbar>
        <ToolbarHeading>
          <ToolbarPageTitle>Laporan Keuangan</ToolbarPageTitle>
          <ToolbarDescription>Laporan keuangan bulanan dan tahunan</ToolbarDescription>
        </ToolbarHeading>
        <ToolbarActions>
          <Button variant="outline" size="sm">
            <Printer className="size-4 mr-2" />
            Print
          </Button>
          <Button variant="outline" size="sm">
            <Download className="size-4 mr-2" />
            Export Excel
          </Button>
        </ToolbarActions>
      </Toolbar>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-50 dark:bg-green-950 rounded-lg">
                <TrendingUp className="size-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Pemasukan</p>
                <p className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {formatCurrency(totalPemasukan)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-50 dark:bg-red-950 rounded-lg">
                <TrendingDown className="size-5 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Pengeluaran</p>
                <p className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {formatCurrency(totalPengeluaran)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <TrendingUp className="size-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Saldo Bersih</p>
                <p className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {formatCurrency(totalSaldo)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Laporan Bulanan {new Date().getFullYear()}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Bulan
                  </th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Pemasukan
                  </th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Pengeluaran
                  </th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Saldo
                  </th>
                </tr>
              </thead>
              <tbody>
                {mockFinancialReports.map((report) => (
                  <tr
                    key={report.id}
                    className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <td className="py-3 px-4">
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {report.bulan}
                      </p>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <p className="text-sm text-green-600 font-medium">
                        {formatCurrency(report.pemasukan)}
                      </p>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <p className="text-sm text-red-600 font-medium">
                        {formatCurrency(report.pengeluaran)}
                      </p>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <p className="text-sm text-blue-600 font-medium">
                        {formatCurrency(report.saldo)}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
