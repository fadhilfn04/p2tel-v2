'use client';

import { Toolbar, ToolbarActions, ToolbarDescription, ToolbarHeading, ToolbarPageTitle } from '@/components/layout/toolbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Flag } from 'lucide-react';
import { mockLetterAgendas } from '@/lib/data/mock-data';
import { formatDate } from '@/lib/data/mock-data';

export default function AgendaPage() {
  return (
    <div className="container">
      <Toolbar>
        <ToolbarHeading>
          <ToolbarPageTitle>Agenda Surat</ToolbarPageTitle>
          <ToolbarDescription>Kalender agenda surat masuk dan keluar</ToolbarDescription>
        </ToolbarHeading>
      </Toolbar>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="size-5" />
            Agenda Surat
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockLetterAgendas.map((agenda) => (
              <div key={agenda.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{agenda.nomorAgenda}</span>
                    <Badge className={`text-xs ${
                      agenda.sifat === 'penting' 
                        ? 'bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-400' 
                        : 'bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
                    }`}>
                      <Flag className="size-3 inline mr-1" />
                      {agenda.sifat}
                    </Badge>
                  </div>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">
                    {agenda.perihal}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                    No. Surat: {agenda.nomorSurat}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Tanggal: {formatDate(agenda.tanggalTerima)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
