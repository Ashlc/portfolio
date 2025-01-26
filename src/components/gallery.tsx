import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ScrollShadow,
  Tooltip,
} from "@heroui/react";
import { motion } from "framer-motion";
import { Expand, GalleryThumbnails } from "lucide-react";
import { useState } from "react";

import { works } from "@/service/works";
import { ANIMATION_VARIANTS, TRANSITION } from "@/utils/constants";

type Props = {
  index: number;
};

const Gallery = ({ index }: Props) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const { images, cover } = works[index];
  const allImages = images ? [cover, ...images] : [cover];

  const handleImageChange = (direction: number) => {
    const nextIndex = activeImageIndex + direction;

    if (nextIndex < 0 || nextIndex >= allImages.length) return;
    setActiveImageIndex(nextIndex);
  };

  const dragEndHandler = (dragInfo: { offset: { x: number } }) => {
    const offset = dragInfo.offset.x;
    const direction = offset > 0 ? -1 : 1;

    handleImageChange(direction);
  };

  return (
    <div className="w-full overflow-clip">
      <Modal
        isOpen={modalOpen}
        scrollBehavior="outside"
        size="3xl"
        onClose={() => setModalOpen(false)}
      >
        <ModalContent>
          <ModalHeader className="items-center gap-2">
            <GalleryThumbnails size={18} />
            Galeria
          </ModalHeader>
          <ModalBody>
            {allImages.length > 0 && (
              <motion.div
                key={activeImageIndex}
                animate="active"
                className="w-full rounded-xl flex justify-center"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                exit="exit"
                initial="incoming"
                transition={TRANSITION}
                variants={ANIMATION_VARIANTS}
                onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
              >
                <img
                  alt="Print do projeto"
                  className="max-h-[500px] border border-default-200 rounded-xl"
                  src={allImages[activeImageIndex]}
                />
              </motion.div>
            )}
          </ModalBody>
          <ModalFooter className="justify-between items-center">
            <Button
              color="primary"
              disabled={activeImageIndex === 0}
              onPress={() => handleImageChange(-1)}
            >
              Anterior
            </Button>
            <p>
              {activeImageIndex + 1} / {allImages.length}
            </p>
            <Button
              color="primary"
              disabled={activeImageIndex === allImages.length - 1}
              onPress={() => handleImageChange(1)}
            >
              Próximo
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <div className="flex flex-row gap-4 items-center">
        <h2 className="text-lg font-bold">Galeria</h2>
        <Tooltip content="Expandir galeria" placement="top">
          <Button
            isIconOnly
            aria-label="Expandir galeria"
            color="primary"
            radius="full"
            size="sm"
            variant="light"
            onPress={() => setModalOpen(true)}
          >
            <Expand size={15} />
          </Button>
        </Tooltip>
      </div>
      <ScrollShadow orientation="horizontal" onClick={() => setModalOpen(true)}>
        <div className="flex flex-row w-fit gap-4 py-4">
          {allImages.map((image, i) => (
            <div
              key={i}
              className="w-[320px] relative aspect-video overflow-hidden"
            >
              <img
                alt="Prints do projeto"
                className="absolute top-0 left-0 object-cover"
                src={image}
              />
            </div>
          ))}
        </div>
      </ScrollShadow>
    </div>
  );
};

export default Gallery;
