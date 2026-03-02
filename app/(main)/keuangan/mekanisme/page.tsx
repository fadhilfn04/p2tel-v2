'use client';

import { Toolbar, ToolbarDescription, ToolbarHeading, ToolbarPageTitle } from '@/components/layout/toolbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, Calendar, CheckCircle, AlertCircle } from 'lucide-react';

export default function MekanismeIuranPage() {
  return (
    <div className="container">
      <Toolbar>
        <ToolbarHeading>
          <ToolbarPageTitle>Mekanisme Iuran</ToolbarPageTitle>
          <ToolbarDescription>Informasi pembayaran iuran anggota</ToolbarDescription>
        </ToolbarHeading>
      </Toolbar>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="size-5 text-green-600" />
              Besaran Iuran
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-2">
                Rp 50.000
              </p>
              <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                per bulan
              </p>
            </div>
            <div className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• Iuran dapat dibayar tunip atau transfer</p>
              <p>• Batas pembayaran: Tanggal 10 setiap bulan</p>
              <p>• Keterlambatan: Denda Rp 5.000/bulan</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="size-5 text-blue-600" />
              Jadwal Pembayaran
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                <span className="text-sm">Januari 2024</span>
                <CheckCircle className="size-4 text-green-600" />
              </div>
              <div className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                <span className="text-sm">Februari 2024</span>
                <CheckCircle className="size-4 text-green-600" />
              </div>
              <div className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                <span className="text-sm">Maret 2024</span>
                <AlertCircle className="size-4 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
