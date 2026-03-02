'use client';

import { Toolbar, ToolbarActions, ToolbarDescription, ToolbarHeading, ToolbarPageTitle } from '@/components/layout/toolbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FolderOpen, Upload, Download, FileText } from 'lucide-react';
import { mockArchives } from '@/lib/data/mock-data';
import { formatDate } from '@/lib/data/mock-data';

export default function ArsipPage() {
  return (
    <div className="container">
      <Toolbar>
        <ToolbarHeading>
          <ToolbarPageTitle>Manajemen Arsip</ToolbarPageTitle>
          <ToolbarDescription>Kelola dokumen dan arsip digital</ToolbarDescription>
        </ToolbarHeading>
        <ToolbarActions>
          <Button size="sm" variant="outline">
            <Upload className="size-4 mr-2" />
            Upload Dokumen
          </Button>
        </ToolbarActions>
      </Toolbar>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FolderOpen className="size-5" />
            Dokumen Arsip
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {mockArchives.map((archive) => (
              <div key={archive.id} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                <div className="flex items-start gap-3">
                  <FileText className="size-8 text-blue-600 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate mb-1">
                      {archive.namaDokumen}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                      {archive.kategori}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {formatDate(archive.tanggalUpload)}
                    </p>
                  </div>
                </div>
                <div className="mt-3 flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Download className="size-4 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
