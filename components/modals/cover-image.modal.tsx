import { UseCoverImage } from "@/hooks/use-cover-image";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";

export const CoverImageModal = () => {
  const coverImage = UseCoverImage();

  return (
    <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
      <DialogContent>
        <DialogHeader>
          <h1 className="text-center text-lg font-semibold">Cover Image</h1>
        </DialogHeader>
        <div>TODO:Upload image</div>
      </DialogContent>
    </Dialog>
  );
};
