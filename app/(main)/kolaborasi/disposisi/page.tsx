'use client';

import { Toolbar, ToolbarActions, ToolbarDescription, ToolbarHeading, ToolbarPageTitle } from '@/components/layout/toolbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Send, Plus } from 'lucide-react';
import { mockDispositions } from '@/lib/data/mock-data';
import { formatDate } from '@/lib/data/mock-data';

export default function DisposisiPage() {
  return (
    <div className="container">
      <Toolbar>
        <ToolbarHeading>
          <ToolbarPageTitle>Disposisi Surat</ToolbarPageTitle>
          <ToolbarDescription>Arahkan dan lacak disposisi surat</ToolbarDescription>
        </ToolbarHeading>
        <ToolbarActions>
          <Button size="sm">
            <Plus className="size-4 mr-2" />
            Buat Disposisi
          </Button>
        </ToolbarActions>
      </Toolbar>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Send className="size-5" />
            Daftar Disposisi
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockDispositions.map((disp) => (
              <div key={disp.id} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      Surat ID: {disp.suratId}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {formatDate(disp.tanggal)}
                    </p>
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-lg mb-2">
                  <p className="text-xs font-medium text-blue-900 dark:text-blue-100 mb-1">Instruksi:</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{disp.instruksi}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-600 dark:text-gray-400">Tujuan:</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{disp.tujuan}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
