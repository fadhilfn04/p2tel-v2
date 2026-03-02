'use client';

import {
  Toolbar,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle,
} from '@/components/layout/toolbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, AlertCircle, XCircle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const accuracyData = [
  {
    id: 1,
    nama: 'Ahmad Suryadi',
    nik: '3201123456780001',
    issue: 'Nomor telepon tidak valid',
    severity: 'medium',
    status: 'pending',
  },
  {
    id: 2,
    nama: 'Siti Rahayu',
    nik: '3201123456780002',
    issue: 'Data alamat tidak lengkap',
    severity: 'low',
    status: 'resolved',
  },
  {
    id: 3,
    nama: 'Budi Santoso',
    nik: '3201123456780003',
    issue: 'NIK terduplikasi dengan anggota lain',
    severity: 'high',
    status: 'pending',
  },
];

export default function KeanggotaanAkurasiPage() {
  return (
    <div className="container">
      <Toolbar>
        <ToolbarHeading>
          <ToolbarPageTitle>Akurasi Data Anggota</ToolbarPageTitle>
          <ToolbarDescription>Validasi dan koreksi data keanggotaan</ToolbarDescription>
        </ToolbarHeading>
      </Toolbar>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-50 dark:bg-green-950 rounded-lg">
                <CheckCircle className="size-5 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  1,420
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Data Valid
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-50 dark:bg-orange-950 rounded-lg">
                <AlertCircle className="size-5 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  103
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Perlu Koreksi
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-50 dark:bg-red-950 rounded-lg">
                <XCircle className="size-5 text-red-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  12
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Data Invalid
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Daftar Perbaikan Data</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {accuracyData.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                      {item.nama}
                    </p>
                    <Badge
                      variant={
                        item.severity === 'high'
                          ? 'destructive'
                          : item.severity === 'medium'
                          ? 'primary'
                          : 'secondary'
                      }
                      className="text-xs"
                    >
                      {item.severity}
                    </Badge>
                    {item.status === 'resolved' && (
                      <Badge className="text-xs bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-400">
                        Selesai
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                    NIK: {item.nik}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {item.issue}
                  </p>
                </div>
                <div className="ml-4">
                  {item.status === 'resolved' ? (
                    <Button variant="outline" size="sm" disabled>
                      <RefreshCw className="size-4 mr-2" />
                      Perbarui
                    </Button>
                  ) : (
                    <Button size="sm">
                      <RefreshCw className="size-4 mr-2" />
                      Perbaiki
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
