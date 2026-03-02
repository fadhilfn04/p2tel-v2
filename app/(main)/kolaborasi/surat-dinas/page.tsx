'use client';

import { Toolbar, ToolbarActions, ToolbarDescription, ToolbarHeading, ToolbarPageTitle } from '@/components/layout/toolbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Plus, FileText, Send, Inbox, SendHorizontal } from 'lucide-react';
import { mockOfficialLetters } from '@/lib/data/mock-data';
import { formatDate } from '@/lib/data/mock-data';

export default function SuratDinasPage() {
  const suratMasuk = mockOfficialLetters.filter((s) => s.jenis === 'masuk');
  const suratKeluar = mockOfficialLetters.filter((s) => s.jenis === 'keluar');

  return (
    <div className="container">
      <Toolbar>
        <ToolbarHeading>
          <ToolbarPageTitle>Surat Dinas</ToolbarPageTitle>
          <ToolbarDescription>Pengelolaan surat masuk dan keluar</ToolbarDescription>
        </ToolbarHeading>
        <ToolbarActions>
          <Button size="sm">
            <Plus className="size-4 mr-2" />
            Buat Surat Baru
          </Button>
        </ToolbarActions>
      </Toolbar>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Inbox className="size-8 text-blue-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{suratMasuk.length}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Surat Masuk</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <SendHorizontal className="size-8 text-green-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{suratKeluar.length}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Surat Keluar</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="size-5" />
            Daftar Surat
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">No. Surat</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">Perihal</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">Tanggal</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">Jenis</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">Status</th>
                </tr>
              </thead>
              <tbody>
                {mockOfficialLetters.map((letter) => (
                  <tr key={letter.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-gray-100">{letter.nomorSurat}</td>
                    <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">{letter.perihal}</td>
                    <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">{formatDate(letter.tanggal)}</td>
                    <td className="py-3 px-4">
                      <Badge variant={letter.jenis === 'masuk' ? 'primary' : 'secondary'} className="text-xs">
                        {letter.jenis === 'masuk' ? 'Masuk' : 'Keluar'}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Badge className="text-xs bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-400">
                        {letter.status}
                      </Badge>
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
