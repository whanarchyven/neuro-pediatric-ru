// components/ScreenshotButton.tsx

import React from 'react';
import html2canvas from 'html2canvas';
import JSZip from 'jszip';

const ScreenshotButton: React.FC = () => {
  const handleScreenshot = async () => {
    const zip = new JSZip();

    const takeScreenshot = async (element: HTMLElement, name: string) => {
      const canvas = await html2canvas(element);
      return new Promise<void>((resolve) => {
        canvas.toBlob((blob) => {
          if (blob) {
            zip.file(name + '.png', blob);
            resolve();
          }
        });
      });
    };

    // Найдите элементы, которые хотите захватить
    const elements = document.querySelectorAll<HTMLElement>(
      'body, header, footer'
    ); // Убедитесь, что выбираете правильные элементы

    // Сделайте снимки экрана для каждого элемента
    for (let i = 0; i < elements.length; i++) {
      await takeScreenshot(elements[i], `screenshot-${i + 1}`);
    }

    // Создайте и скачайте ZIP-архив
    zip.generateAsync({ type: 'blob' }).then((content: any) => {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(content);
      link.download = 'screenshots.zip';
      link.click();
    });
  };

  return <button onClick={handleScreenshot}>Сделать снимки экрана</button>;
};

export default ScreenshotButton;
