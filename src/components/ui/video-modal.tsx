
import React from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
}

const VideoModal = ({ isOpen, onClose, videoId }: VideoModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[900px] p-0 bg-black border border-gray-800">
        <div className="relative pt-[56.25%] w-full">
          <button 
            onClick={onClose} 
            className="absolute top-2 right-2 z-50 p-1 bg-black/50 text-white rounded-full hover:bg-black/80"
            aria-label="Close video"
          >
            <X size={20} />
          </button>
          <iframe 
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="DevOps & AWS Introduction Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
